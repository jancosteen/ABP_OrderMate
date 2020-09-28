using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.Restaurants;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.RestaurantStatusses
{
    [AutoMapFrom(typeof(RestaurantStatus))]
    [AutoMapTo(typeof(RestaurantStatus))]
    public class RestaurantStatusDto: FullAuditedEntityDto<int>
    {
        //public int RestaurantStatusId { get; set; }
        public string RestaurantStatus1 { get; set; }

    }
}
