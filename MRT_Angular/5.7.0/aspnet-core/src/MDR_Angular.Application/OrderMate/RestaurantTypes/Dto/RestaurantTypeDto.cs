using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.RestaurantTypeReferences;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.RestaurantTypes
{
    [AutoMapFrom(typeof(RestaurantType))]
    [AutoMapTo(typeof(RestaurantType))]
    public class RestaurantTypeDto: FullAuditedEntityDto<int>
    {
        //public int RestaurantTypeId { get; set; }
        public string RestaurantType1 { get; set; }

    }
}
