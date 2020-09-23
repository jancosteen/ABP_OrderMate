using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.MenuItemPrices.Dto
{
    [AutoMapFrom(typeof(MenuItemPrice))]
    [AutoMapTo(typeof(MenuItemPrice))]
    public class MenuItemPriceCandUDto
    {
        public double MenuItemPrice1 { get; set; }
        public DateTime MenuItemDateUpdated { get; set; }
        public string MenuItemPriceStatus { get; set; }
    }
}
