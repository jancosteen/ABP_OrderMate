using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using MDR_Angular.OrderMate.MenuItems;
using MDR_Angular.OrderMate.Menus;
using MDR_Angular.OrderMate.Restaurants;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.MenuRestaurants
{
    public class MenuRestaurant: FullAuditedEntity<int>
    {
        //public int MenuRestaurantId { get; set; }
        public int MenuIdFk { get; set; }
        public int RestaurantIdFk { get; set; }
        public int? MenuItemIdFk { get; set; }

        [ForeignKey("MenuIdFk")]
        public virtual Menu MenuIdFkNavigation { get; set; }
        [ForeignKey("MenuItemIdFk")]
        public virtual MenuItem MenuItemIdFkNavigation { get; set; }
        [ForeignKey("RestaurantIdFk")]
        public virtual Restaurant RestaurantIdFkNavigation { get; set; }
    }
}
