using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using MDR_Angular.OrderMate.MenuRestaurants.Dto;
using System;
using System.Collections.Generic;

namespace MDR_Angular.OrderMate.Menus
{
    [AutoMapFrom(typeof(Menu))]
    [AutoMapTo(typeof(Menu))]
    public class MenuDto : FullAuditedEntityDto<int>
    {
        public string MenuName { get; set; }
        public string MenuDescription { get; set; }
        public DateTime MenuDateCreated { get; set; }
        public TimeSpan? MenuTimeActiveFrom { get; set; }
        public TimeSpan? MenuTimeActiveTo { get; set; }

        public virtual ICollection<MenuRestaurantDto> MenuRestaurant { get; set; }
    }
}
