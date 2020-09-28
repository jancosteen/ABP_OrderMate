using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using MDR_Angular.OrderMate.Employees;
using MDR_Angular.OrderMate.Products;
using MDR_Angular.OrderMate.StockTakes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.ProductStockTakes
{
    public class ProductStockTake: FullAuditedEntity<int>
    {
        //public int ProductStockTakeId { get; set; }
        public int? EmployeeIdFk { get; set; }
        public int ProductIdFk { get; set; }
        public int ProductStockTakeQty { get; set; }
        public int StockTakeIdFk { get; set; }

        [ForeignKey("EmployeeIdFk")]
        public virtual Employee EmployeeIdFkNavigation { get; set; }
        [ForeignKey("ProductIdFk")]
        public virtual Product ProductIdFkNavigation { get; set; }
        [ForeignKey("StockTakeIdFk")]
        public virtual StockTake StockTakeIdFkNavigation { get; set; }
    }
}
