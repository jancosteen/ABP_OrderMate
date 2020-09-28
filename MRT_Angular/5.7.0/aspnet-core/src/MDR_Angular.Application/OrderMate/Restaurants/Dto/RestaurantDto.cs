using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.Employees;
using MDR_Angular.OrderMate.MenuRestaurants;
using MDR_Angular.OrderMate.QrCodes;
using MDR_Angular.OrderMate.ReservationRestaurants;
using MDR_Angular.OrderMate.RestaurantAdvertisements;
using MDR_Angular.OrderMate.RestaurantFacilityRefs;
using MDR_Angular.OrderMate.RestaurantImages;
using MDR_Angular.OrderMate.RestaurantStatusses;
using MDR_Angular.OrderMate.RestaurantTypeReferences;
using MDR_Angular.OrderMate.SeatingLayouts;
using MDR_Angular.OrderMate.UserComments;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.Restaurants
{
    [AutoMapFrom(typeof(Restaurant))]
    [AutoMapTo(typeof(Restaurant))]
    public class RestaurantDto: FullAuditedEntityDto<int>
    {
        //public int RestaurantId { get; set; }
        public string RestaurantName { get; set; }
        public string RestaurantUrl { get; set; }
        public string RestaurantDescription { get; set; }
        public DateTime? RestaurantDateCreated { get; set; }
        public string RestaurantAddressLine1 { get; set; }
        public string ResaturantAddressLine2 { get; set; }
        public string RestaurantCity { get; set; }
        public string RestaurantPostalCode { get; set; }
        public string RestaurantProvince { get; set; }
        public string RestaurantCountry { get; set; }
        public int? RestaurantStatusIdFk { get; set; }

        
    }
}
