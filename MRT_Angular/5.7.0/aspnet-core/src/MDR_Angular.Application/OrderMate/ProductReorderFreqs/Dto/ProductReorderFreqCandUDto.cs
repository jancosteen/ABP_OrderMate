﻿using Abp.AutoMapper;

namespace MDR_Angular.OrderMate.ProductReorderFreqs
{
    [AutoMapFrom(typeof(ProductReorderFreq))]
    [AutoMapTo(typeof(ProductReorderFreq))]
    public class ProductReorderFreqCandUDto
    {
        //public int ProductReorderFreqId { get; set; }
        public string ProductReorderFreq1 { get; set; }

    }
}
