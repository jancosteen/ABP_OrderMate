using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.Products;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.ProductTypes
{
    [AutoMapFrom(typeof(ProductType))]
    [AutoMapTo(typeof(ProductType))]
    public class ProductTypeDto: FullAuditedEntityDto<int>
    {
        //public int ProductTypeId { get; set; }
        public string ProductType1 { get; set; }

    }
}
