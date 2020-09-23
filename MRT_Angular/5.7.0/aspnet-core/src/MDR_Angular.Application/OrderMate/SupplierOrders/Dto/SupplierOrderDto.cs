﻿using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.SupplierOrderLines;
using MDR_Angular.OrderMate.Suppliers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.SupplierOrders
{
    [AutoMapFrom(typeof(SupplierOrder))]
    [AutoMapTo(typeof(SupplierOrder))]
    public class SupplierOrderDto: EntityDto<int>
    {
        //public int SupplierOrderId { get; set; }
        public DateTime SupplierOrderDate { get; set; }
        public int? SupplierIdFk { get; set; }

        
    }
}