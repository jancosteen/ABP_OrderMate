using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.ProductStockTakes;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.StockTakes
{
    [AutoMapFrom(typeof(StockTake))]
    [AutoMapTo(typeof(StockTake))]
    public class StockTakeCandUDto
    {
        //public int StockTakeId { get; set; }
        public DateTime StockTakeDate { get; set; }

    }
}
