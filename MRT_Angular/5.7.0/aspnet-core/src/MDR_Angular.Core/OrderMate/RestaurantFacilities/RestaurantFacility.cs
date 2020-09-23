﻿using Abp.Domain.Entities;
using MDR_Angular.OrderMate.RestaurantFacilityRefs;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.RestaurantFacilities
{
    public class RestaurantFacility: Entity<int>
    {
        //public int RestaurantFacilityId { get; set; }
        public string RestaurantFacility1 { get; set; }

        public virtual ICollection<RestaurantFacilityRef> ResaurantFacilityRef { get; set; }
    }
}
