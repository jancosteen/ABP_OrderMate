using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.Restaurants;
using MDR_Angular.OrderMate.RestaurantTypes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.RestaurantTypeReferences
{
    [AutoMapFrom(typeof(RestaurantTypeRef))]
    [AutoMapTo(typeof(RestaurantTypeRef))]
    public class RestaurantTypeRefDto: FullAuditedEntityDto<int>
    {
        //public int RestaurantTypeRefId { get; set; }
        public int RestaurantTypeIdFk { get; set; }
        public int RestaurantIdFk { get; set; }

    }
}
