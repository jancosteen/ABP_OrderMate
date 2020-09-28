using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.QrCodeSeatings;
using MDR_Angular.OrderMate.Reservations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.Seatings
{
    [AutoMapFrom(typeof(Seating))]
    [AutoMapTo(typeof(Seating))]
    public class SeatingDto: FullAuditedEntityDto<int>
    {
        //public int SeatingId { get; set; }
        public DateTime SeatingDate { get; set; }
        public TimeSpan SeatingTime { get; set; }
        public int? ReservationIdFk { get; set; }

    }
}
