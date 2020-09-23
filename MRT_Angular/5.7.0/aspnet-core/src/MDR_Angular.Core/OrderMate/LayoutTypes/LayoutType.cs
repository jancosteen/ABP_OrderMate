﻿using Abp.Domain.Entities;
using MDR_Angular.OrderMate.SeatingLayouts;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.LayoutTypes
{
    public class LayoutType: Entity<int>
    {
        //public int LayoutTypeId { get; set; }
        public string LayoutType1 { get; set; }

        public virtual ICollection<SeatingLayout> SeatingLayout { get; set; }
    }
}
