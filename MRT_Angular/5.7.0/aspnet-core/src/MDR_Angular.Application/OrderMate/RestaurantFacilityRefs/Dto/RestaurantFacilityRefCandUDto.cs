using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.RestaurantFacilities;
using MDR_Angular.OrderMate.Restaurants;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.RestaurantFacilityRefs
{
    [AutoMapFrom(typeof(RestaurantFacilityRef))]
    [AutoMapTo(typeof(RestaurantFacilityRef))]
    public class RestaurantFacilityRefCandUDto
    {
        //public int RestaurantFacilityRefId { get; set; }
        public int RestaurantFacilityIdFk { get; set; }
        public int RestaurantIdFk { get; set; }

       
    }
}
