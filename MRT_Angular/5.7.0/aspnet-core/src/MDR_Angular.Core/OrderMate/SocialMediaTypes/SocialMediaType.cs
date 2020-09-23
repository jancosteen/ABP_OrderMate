using Abp.Domain.Entities;
using MDR_Angular.OrderMate.SocialMedias;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.SocialMediaTypes
{
    public class SocialMediaType: Entity<int>
    {
        //public int SocialMediaTypeId { get; set; }
        public string SocialMediaType1 { get; set; }

        public virtual ICollection<SocialMedia> SocialMedia { get; set; }
    }
}
