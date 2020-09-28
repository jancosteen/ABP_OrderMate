using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.ProductCategories;
using MDR_Angular.OrderMate.ProductReorderFreqs;
using MDR_Angular.OrderMate.ProductStockTakes;
using MDR_Angular.OrderMate.ProductsWrittenOff;
using MDR_Angular.OrderMate.ProductTypes;
using MDR_Angular.OrderMate.SupplierOrderLines;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.Products
{
    [AutoMapFrom(typeof(Product))]
    [AutoMapTo(typeof(Product))]
    public class ProductDto: FullAuditedEntityDto<int>
    {
        //public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public int ProductReorderLevel { get; set; }
        public int ProductOnHand { get; set; }
        public int? ProductTypeIdFk { get; set; }
        public int? ProductCategoryIdFk { get; set; }
        public int? ProductReorderFreqIdFk { get; set; }

    }
}
