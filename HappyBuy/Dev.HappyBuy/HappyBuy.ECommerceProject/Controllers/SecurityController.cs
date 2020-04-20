// <copyright file="SecurityController.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuy.ECommerceProject.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net;
    using System.Net.Mail;
    using System.Reflection;
    using System.Threading.Tasks;
    using HappyBuyBL.HB.BL.Interfaces;
    using HappyBuyDAL;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Security WebAPI.
    /// </summary>
    [ApiController]
    public class SecurityController : ControllerBase
    {
        private readonly IHBCustomerBL devHappyBuyBL;

        /// <summary>
        /// Initializes a new instance of the <see cref="SecurityController"/> class.
        /// </summary>
        /// <param name="devHappyBuyBL">Interface Injection.</param>
        public SecurityController(IHBCustomerBL devHappyBuyBL)
        {
            this.devHappyBuyBL = devHappyBuyBL;
        }

        /// <summary>
        /// Customer Password Update.
        /// </summary>
        /// <param name="customer">Customer Object Properties.</param>
        /// <returns>Returns Inserted result.</returns>
        [HttpPost]
        [Route("api/updatePassword")]
        public int Updatepassword(Customer customer)
        {
            Dictionary<string, object> keyValues = this.GetProperty<Customer>(customer);
            int i = this.devHappyBuyBL.UpdatePassword<Customer>(keyValues);
            return i;
        }

        /// <summary>
        /// Password Update with OTP.
        /// </summary>
        /// <param name="customer">Customer Email.</param>
        /// <returns>return otp.</returns>
        [HttpPost]
        [Route("api/forgotPassword")]
        public string SendEmail(Customer customer)
        {
            string otp = this.Validation(customer);
            if (otp != null)
            {
                try
                {
                    string message = otp;

                    var credentials = new NetworkCredential("customer.happybuy@gmail.com", "hb@123456");

                    var mail = new MailMessage()
                    {
                        From = new MailAddress("customer.happybuy@gmail.com"),
                        Subject = "OTP for Password Updation",
                        Body = message,
                    };
                    mail.IsBodyHtml = true;
                    mail.To.Add(new MailAddress(customer.CustomerEmail));

                    var client = new SmtpClient()
                    {
                        Port = 587,
                        DeliveryMethod = SmtpDeliveryMethod.Network,
                        UseDefaultCredentials = true,
                        Host = "smtp.gmail.com",
                        EnableSsl = true,
                        Credentials = credentials,
                    };
                    client.Send(mail);
                    return otp;
                }
                catch (System.Exception e)
                {
                    return e.Message;
                }
            }
            else
            {
                return null;
            }
        }

        private Dictionary<string, object> GetProperty<T>(object classobject)
        {
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            PropertyInfo[] infos = classobject.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                if (info.GetValue(classobject) != null)
                {
                    keyValues.Add(info.Name, info.GetValue(classobject, null));
                }
            }

            return keyValues;
        }

        private string Validation(Customer customer)
        {
            string result = null;

            Dictionary<string, object> keyValues = this.GetProperty<Customer>(customer);
            int j = this.devHappyBuyBL.ForgotPassword<Customer>(keyValues);

            if (j == 1)
            {
                string num = "123456789";
                int len = num.Length;
                string otp = string.Empty;
                int otpdigit = 5;
                string finaldigit;
                int getindex;
                for (int i = 0; i < otpdigit; i++)
                {
                    do
                    {
                        getindex = new Random().Next(0, len);
                        finaldigit = num.ToCharArray()[getindex].ToString();
                    }
                    while (otp.IndexOf(finaldigit) != -1);
                    otp += finaldigit;
                }

                result = otp;
                return result;
            }
            else
            {
                return result;
            }
        }
    }
}