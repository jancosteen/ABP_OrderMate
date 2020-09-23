﻿using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.SupplierOrders;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.Suppliers
{
    [AutoMapFrom(typeof(Supplier))]
    [AutoMapTo(typeof(Supplier))]
    public class SupplierDto: EntityDto<int>
    {
        //public int SupplierId { get; set; }
        public string SupplierName { get; set; }
        public string SupplierDescription { get; set; }
        public string SupplierEmail { get; set; }
        public string SupplierContactNumber { get; set; }
        public string SupplierAddressLine1 { get; set; }
        public string SupplierAddressLine2 { get; set; }
        public string SupplierAddressLine3 { get; set; }
        public string SupplierCity { get; set; }
        public string SupplierPostalCode { get; set; }
        public string SupplierCountry { get; set; }

    }
}
