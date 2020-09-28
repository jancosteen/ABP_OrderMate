using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.Reservations
{
    public interface IReservationAppService: IAsyncCrudAppService<ReservationDto>
    {
    }
}
