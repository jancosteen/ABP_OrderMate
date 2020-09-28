using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using MDR_Angular.OrderMate.Specials;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.SpecialPrices
{
    public class SpecialPrice: FullAuditedEntity<int>
    {
        //public int SpecialPriceId { get; set; }
        public double SpecialPrice1 { get; set; }
        public DateTime SpecialPriceDateUpdated { get; set; }
        public int? SpecialIdFk { get; set; }

        [ForeignKey("SpecialIdFk")]
        public virtual Special SpecialIdFkNavigation { get; set; }
    }
}
