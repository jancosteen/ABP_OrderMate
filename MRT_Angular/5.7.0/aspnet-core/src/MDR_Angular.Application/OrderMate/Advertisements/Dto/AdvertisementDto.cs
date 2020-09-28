using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.Advertisements.Dto
{
    [AutoMapFrom(typeof(Advertisement))]
    [AutoMapTo(typeof(Advertisement))]
    public  class AdvertisementDto: FullAuditedEntityDto<int>
    {
        public string AdvertisementName { get; set; }
        public string AdvertisementDescription { get; set; }
        public byte[] AdvertisementFile { get; set; }

        public int? AdvertisementDateIdFk { get; set; }
        public int? AdvertisementPriceIdFk { get; set; }
    }
}
