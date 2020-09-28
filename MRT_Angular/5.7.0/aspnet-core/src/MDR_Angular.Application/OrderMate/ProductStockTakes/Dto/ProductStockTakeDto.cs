using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.Employees;
using MDR_Angular.OrderMate.Products;
using MDR_Angular.OrderMate.StockTakes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.ProductStockTakes
{
    [AutoMapFrom(typeof(ProductStockTake))]
    [AutoMapTo(typeof(ProductStockTake))]
    public class ProductStockTakeDto: FullAuditedEntityDto<int>
    {
        //public int ProductStockTakeId { get; set; }
        public int? EmployeeIdFk { get; set; }
        public int ProductIdFk { get; set; }
        public int ProductStockTakeQty { get; set; }
        public int StockTakeIdFk { get; set; }

        
    }
}
