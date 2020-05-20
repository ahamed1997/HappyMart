// <copyright file="Startup.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuy.ECommerceProject
{
    using System.Text;
    using HappyBuyBL;
    using HappyBuyBL.HB.BL.Interfaces;
    using HappyBuyBL.HB.BL.Models;
    using HappyBuyDAL;
    using HappyBuyDAL.Implementation;
    using HappyBuyDAL.Interfaces;
    using Microsoft.AspNetCore.Authentication.JwtBearer;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Http.Features;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.IdentityModel.Tokens;
    using static Microsoft.AspNetCore.Hosting.Internal.HostingApplication;

    /// <summary>
    /// Startup class.
    /// </summary>
    public class Startup
    {
        private readonly string myAllowSpecificOrigins = "_myAllowSpecificOrigins";

        /// <summary>
        /// Initializes a new instance of the <see cref="Startup"/> class.
        /// </summary>
        /// <param name="configuration">Configuration Setup.</param>
        public Startup(IConfiguration configuration)
        {
            this.Configuration = configuration;
        }

        /// <summary>
        /// Gets or sets database Connectionstring Property.
        /// </summary>
        public static string ConnectionString { get; set; }

        /// <summary>
        /// Gets or sets configuration Properties.
        /// </summary>
        public IConfiguration Configuration { get; set; }

        /// <summary>
        /// Service Provider.
        /// </summary>
        /// <param name="services">Services Collections.</param>
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<CookiePolicyOptions>(options =>
            {
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            services.AddCors(options =>
            {
                options.AddPolicy(this.myAllowSpecificOrigins, builder => builder.WithOrigins("http://localhost:3000").WithOrigins("http://localhost:3001").
                AllowAnyMethod().AllowAnyHeader().AllowCredentials().Build());
            });

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = this.Configuration["Jwt:Issuer"],
                        ValidAudience = this.Configuration["Jwt:Issuer"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.Configuration["Jwt:Key"])),
                    };
                });
            ConnectionString = this.Configuration.GetValue<string>("ConnectonStrings:happyBuyConnection");
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddTransient<IDevHappyBuyDAL, DevHappyBuyDAL>();
            services.AddTransient<IHappyBuyRepository, HappyBuyRepository>();
            services.AddTransient<IHBCartBL, HBCartBL>();
            services.AddTransient<IHBCustomerBL, HBCustomerBL>();
            services.AddTransient<IHBProductBL, HBProductBL>();
            services.AddTransient<IHBOrderBL, HBOrderBL>();
            services.AddTransient<IHBAdminBL, HBAdminBL>();
        }

        /// <summary>
        /// Application Builder.
        /// </summary>
        /// <param name="app">Appliaction Builder.</param>
        /// <param name="env">Hosting Environment.</param>
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseCors(this.myAllowSpecificOrigins);
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCookiePolicy();
            app.UseAuthentication();
            app.UseMvc();
        }
    }
}
