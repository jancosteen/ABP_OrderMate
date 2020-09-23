using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.AdvertisementPrices.Dto
{
    [AutoMapFrom(typeof(AdvertisementPrice))]
    [AutoMapTo(typeof(AdvertisementPrice))]
    public class AdvertisementPriceDto:EntityDto<int>
    {
        public double AdvertismentPrice { get; set; }
        public DateTime AdvertisementPriceDateUpdated { get; set; }
    }
}
