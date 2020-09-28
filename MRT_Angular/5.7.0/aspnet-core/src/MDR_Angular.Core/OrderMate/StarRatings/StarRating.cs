using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using MDR_Angular.OrderMate.UserComments;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.StarRatings
{
    public class StarRating: FullAuditedEntity<int>
    {
        //public int StarRatingId { get; set; }
        public int StarRatingValue { get; set; }

        public virtual ICollection<UserComment> UserComment { get; set; }
    }
}
