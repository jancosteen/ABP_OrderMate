using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.RestaurantFacilityRefs;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.RestaurantFacilities
{
    [AutoMapFrom(typeof(RestaurantFacility))]
    [AutoMapTo(typeof(RestaurantFacility))]
    public class RestaurantFacilityCandUDto
    {
        //public int RestaurantFacilityId { get; set; }
        public string RestaurantFacility1 { get; set; }

    }
}
