﻿using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using MDR_Angular.OrderMate.SocialMediaTypes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.SocialMedias
{
    public class SocialMedia: FullAuditedEntity<int>
    {
        //public int SocialMediaId { get; set; }
        public int SocialMediaTypeIdFk { get; set; }
        public string SocialMediaAddress { get; set; }

        [ForeignKey("SocialMediaTypeIdFk")]
        public virtual SocialMediaType SocialMediaTypeIdFkNavigation { get; set; }
    }
}
