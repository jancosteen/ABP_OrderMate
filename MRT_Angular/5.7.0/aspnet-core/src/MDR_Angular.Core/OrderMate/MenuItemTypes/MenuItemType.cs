using Abp.Domain.Entities;
using MDR_Angular.OrderMate.ItemTypeMenuMenuItems;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.MenuItemTypes
{
    public class MenuItemType: Entity<int>
    {
        //public int MenuItemTypeId { get; set; }
        public string MenuItemType1 { get; set; }

        public virtual ICollection<ItemTypeMenuItem> ItemTypeMenuItem { get; set; }
    }
}
