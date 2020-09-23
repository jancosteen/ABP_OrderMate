using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.OrderStatusses.Dto
{
    [AutoMapFrom(typeof(OrderStatus))]
    [AutoMapTo(typeof(OrderStatus))]
    public class OrderStatusDto: EntityDto<int>
    {
        public string OrderStatus1 { get; set; }
    }
}
