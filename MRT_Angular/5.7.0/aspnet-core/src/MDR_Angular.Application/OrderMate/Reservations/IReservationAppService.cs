using Abp.Application.Services;

namespace MDR_Angular.OrderMate.Reservations
{
    public interface IReservationAppService : IAsyncCrudAppService<ReservationDto>
    {
    }
}
