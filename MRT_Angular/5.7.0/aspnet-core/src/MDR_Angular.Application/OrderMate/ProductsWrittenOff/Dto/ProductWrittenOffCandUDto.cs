using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.Employees;
using MDR_Angular.OrderMate.Products;
using MDR_Angular.OrderMate.WriteOffReasons;
using MDR_Angular.OrderMate.WrittenOffStocks;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.ProductsWrittenOff
{
    [AutoMapFrom(typeof(ProductWrittenOff))]
    [AutoMapTo(typeof(ProductWrittenOff))]
    public class ProductWrittenOffCandUDto
    {
        //public int WrittenOffStockIdFk { get; set; }
        public int ProductIdFk { get; set; }
        public int WrittenOffQty { get; set; }
        public int? EmployeeIdFk { get; set; }

    }
}
