using System.Threading.Tasks;
using Abp.Application.Services;
using MDR_Angular.Sessions.Dto;

namespace MDR_Angular.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
