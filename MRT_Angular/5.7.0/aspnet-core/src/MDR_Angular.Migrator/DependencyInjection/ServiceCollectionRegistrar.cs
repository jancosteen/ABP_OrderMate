﻿using Abp.Dependency;
using Castle.Windsor.MsDependencyInjection;
using MDR_Angular.Identity;
using Microsoft.Extensions.DependencyInjection;

namespace MDR_Angular.Migrator.DependencyInjection
{
    public static class ServiceCollectionRegistrar
    {
        public static void Register(IIocManager iocManager)
        {
            var services = new ServiceCollection();

            IdentityRegistrar.Register(services);

            WindsorRegistrationHelper.CreateServiceProvider(iocManager.IocContainer, services);
        }
    }
}
