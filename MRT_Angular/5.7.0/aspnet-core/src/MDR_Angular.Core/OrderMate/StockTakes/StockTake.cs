using Abp.Domain.Entities;
using MDR_Angular.OrderMate.ProductStockTakes;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.StockTakes
{
    public class StockTake: Entity<int>
    {
        //public int StockTakeId { get; set; }
        public DateTime StockTakeDate { get; set; }

        public virtual ICollection<ProductStockTake> ProductStockTake { get; set; }
    }
}
