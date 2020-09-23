using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.ProductsWrittenOff;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.WriteOffReasons
{
    [AutoMapFrom(typeof(WriteOffReason))]
    [AutoMapTo(typeof(WriteOffReason))]
    public class WriteOffReasonCandUDto
    {
        //public int WriteOffReasonId { get; set; }
        public int WrittenOffStockIdFkFk { get; set; }
        public int ProductIdFkFk { get; set; }
        public string WriteOffReason1 { get; set; }

    }
}
