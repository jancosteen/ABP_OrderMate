using Abp.Domain.Entities;
using MDR_Angular.OrderMate.Products;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.ProductReorderFreqs
{
    public class ProductReorderFreq: Entity<int>
    {
        //public int ProductReorderFreqId { get; set; }
        public string ProductReorderFreq1 { get; set; }

        public virtual ICollection<Product> Product { get; set; }
    }
}
