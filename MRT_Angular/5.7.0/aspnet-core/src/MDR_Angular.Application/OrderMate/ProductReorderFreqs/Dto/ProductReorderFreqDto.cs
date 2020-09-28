using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.Products;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.ProductReorderFreqs
{
    [AutoMapFrom(typeof(ProductReorderFreq))]
    [AutoMapTo(typeof(ProductReorderFreq))]
    public class ProductReorderFreqDto: FullAuditedEntityDto<int>
    {
        //public int ProductReorderFreqId { get; set; }
        public string ProductReorderFreq1 { get; set; }

    }
}
