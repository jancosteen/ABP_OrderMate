using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.SocialMedias;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.SocialMediaTypes
{
    [AutoMapFrom(typeof(SocialMediaType))]
    [AutoMapTo(typeof(SocialMediaType))]
    public class SocialMediaTypeDto: FullAuditedEntityDto<int>
    {
        //public int SocialMediaTypeId { get; set; }
        public string SocialMediaType1 { get; set; }

    }
}
