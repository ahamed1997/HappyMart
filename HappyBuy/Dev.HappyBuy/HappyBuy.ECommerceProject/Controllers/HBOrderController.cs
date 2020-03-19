using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HappyBuy.ECommerceProject.Controllers
{
    [EnableCors("http://localhost:4200", "*", "GET,PUT,POST")]

    public class HBOrderController : Controller
    {
    }
}