using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using MDR_Angular.OrderMate.SocialMedias;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.SocialMediaTypes
{
    public class SocialMediaType: FullAuditedEntity<int>
    {
        //public int SocialMediaTypeId { get; set; }
        public string SocialMediaType1 { get; set; }

        public virtual ICollection<SocialMedia> SocialMedia { get; set; }
    }
}
