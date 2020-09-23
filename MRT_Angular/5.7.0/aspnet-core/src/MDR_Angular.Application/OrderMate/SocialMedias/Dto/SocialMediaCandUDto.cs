using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.SocialMediaTypes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.SocialMedias
{
    [AutoMapFrom(typeof(SocialMedia))]
    [AutoMapTo(typeof(SocialMedia))]
    public class SocialMediaCandU
    {
        //public int SocialMediaId { get; set; }
        public int SocialMediaTypeIdFk { get; set; }
        public string SocialMediaAddress { get; set; }

        
    }
}
