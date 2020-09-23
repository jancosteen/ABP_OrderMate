using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.ProductsWrittenOff;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.WrittenOffStocks
{
    [AutoMapFrom(typeof(WrittenOffStock))]
    [AutoMapTo(typeof(WrittenOffStock))]
    public class WrittenOffStockDto: EntityDto<int>
    {
        //public int WrittenOfStockId { get; set; }
        public DateTime WrittenOfStockDate { get; set; }

    }
}
