using Abp.Domain.Entities;
using MDR_Angular.OrderMate.MenuRestaurants;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.Menus
{
    public class Menu: Entity<int>
    {
        //public int MenuId { get; set; }
        public string MenuName { get; set; }
        public string MenuDescription { get; set; }
        public DateTime MenuDateCreated { get; set; }
        public TimeSpan? MenuTimeActiveFrom { get; set; }
        public TimeSpan? MenuTimeActiveTo { get; set; }

        public virtual ICollection<MenuRestaurant> MenuRestaurant { get; set; }
    }
}
