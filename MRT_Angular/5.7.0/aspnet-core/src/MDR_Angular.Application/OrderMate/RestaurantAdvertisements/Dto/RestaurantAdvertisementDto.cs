using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.Advertisements;
using MDR_Angular.OrderMate.Restaurants;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.RestaurantAdvertisements
{
    [AutoMapFrom(typeof(RestaurantAdvertisement))]
    [AutoMapTo(typeof(RestaurantAdvertisement))]
    public class RestaurantAdvertisementDto: FullAuditedEntityDto<int>
    {
        //public int RestaurantAdvertisesementId { get; set; }
        public int RestaurantIdFk { get; set; }
        public int AdvertisementIdFk { get; set; }

        
    }
}
