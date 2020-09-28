﻿using Abp.Application.Services.Dto;
using Abp.AutoMapper;

namespace MDR_Angular.OrderMate.QrCodes
{
    [AutoMapFrom(typeof(QrCode))]
    [AutoMapTo(typeof(QrCode))]
    public class QrCodeDto : FullAuditedEntityDto<int>
    {
        //public int QrCodeId { get; set; }
        public int? RestaurantIdFk { get; set; }

    }
}
