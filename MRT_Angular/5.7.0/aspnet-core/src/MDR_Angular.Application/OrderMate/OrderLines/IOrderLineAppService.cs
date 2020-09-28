using Abp.Application.Services;
using MDR_Angular.OrderMate.OrderLines.Dto;

namespace MDR_Angular.OrderMate.OrderLines
{
    public interface IOrderLineAppService : IAsyncCrudAppService<OrderLineDto>
    {
    }
}
