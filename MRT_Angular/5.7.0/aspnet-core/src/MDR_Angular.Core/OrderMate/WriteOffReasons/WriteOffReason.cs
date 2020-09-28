using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using MDR_Angular.OrderMate.ProductsWrittenOff;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.WriteOffReasons
{
    public class WriteOffReason: FullAuditedEntity<int>
    {
        //public int WriteOffReasonId { get; set; }
        public int WrittenOffStockIdFkFk { get; set; }
        public int ProductIdFkFk { get; set; }
        public string WriteOffReason1 { get; set; }

        [ForeignKey("WrittenOffStockIdFkFk")]
        public virtual ProductWrittenOff ProductWrittenOff { get; set; }
    }
}
