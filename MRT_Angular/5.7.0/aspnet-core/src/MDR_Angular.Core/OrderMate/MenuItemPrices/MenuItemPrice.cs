﻿using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using MDR_Angular.OrderMate.MenuItems;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.MenuItemPrices
{
    public class MenuItemPrice: FullAuditedEntity<int>
    {
        //public int MenuItemPriceId { get; set; }
        public double MenuItemPrice1 { get; set; }
        public DateTime MenuItemDateUpdated { get; set; }
        public string MenuItemPriceStatus { get; set; }

        public virtual ICollection<MenuItem> MenuItem { get; set; }
    }
}
