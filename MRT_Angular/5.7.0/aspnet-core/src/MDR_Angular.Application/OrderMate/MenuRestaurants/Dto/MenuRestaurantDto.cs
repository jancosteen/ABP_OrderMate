using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using MDR_Angular.OrderMate.MenuItems.Dto;
using MDR_Angular.OrderMate.Menus;
using MDR_Angular.OrderMate.Restaurants;

namespace MDR_Angular.OrderMate.MenuRestaurants.Dto
{
    [AutoMapFrom(typeof(MenuRestaurant))]
    [AutoMapTo(typeof(MenuRestaurant))]
    public class MenuRestaurantDto : FullAuditedEntityDto<int>
    {
        public int MenuIdFk { get; set; }
        public int RestaurantIdFk { get; set; }
        public int? MenuItemIdFk { get; set; }

        
        public virtual MenuDto MenuIdFkNavigation { get; set; }
        
        public virtual MenuItemDto MenuItemIdFkNavigation { get; set; }
        
        public virtual RestaurantDto RestaurantIdFkNavigation { get; set; }
    }
}
