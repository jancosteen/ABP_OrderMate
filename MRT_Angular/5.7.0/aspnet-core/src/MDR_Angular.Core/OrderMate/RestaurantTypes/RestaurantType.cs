using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using MDR_Angular.OrderMate.RestaurantTypeReferences;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.RestaurantTypes
{
    public class RestaurantType: FullAuditedEntity<int>
    {
        //public int RestaurantTypeId { get; set; }
        public string RestaurantType1 { get; set; }

        public virtual ICollection<RestaurantTypeRef> RestaurantTypeReference { get; set; }
    }
}
