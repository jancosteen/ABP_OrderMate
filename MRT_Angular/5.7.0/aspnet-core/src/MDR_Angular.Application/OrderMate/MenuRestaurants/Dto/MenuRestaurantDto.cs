using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.MenuRestaurants.Dto
{
    [AutoMapFrom(typeof(MenuRestaurant))]
    [AutoMapTo(typeof(MenuRestaurant))]
    public class MenuRestaurantDto: EntityDto<int>
    {
        public int MenuIdFk { get; set; }
        public int RestaurantIdFk { get; set; }
        public int? MenuItemIdFk { get; set; }
    }
}
