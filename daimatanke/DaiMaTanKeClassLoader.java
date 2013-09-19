package net.sf.robocode.daimatanke;

import java.net.URL;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.Scriptable;

import net.sf.robocode.loaders.rhino.RhinoClassLoader;


public class DaiMaTanKeClassLoader extends RhinoClassLoader {

    public DaiMaTanKeClassLoader(URL robotClassPath, String robotFullClassName) {
        super(robotClassPath, robotFullClassName, "rhino.team");
    }

    public void initGlobalScope(Context context, Scriptable scope) {
        super.initGlobalScope(context, scope);
        scope.put("window", scope, scope);
        new ChuShiHua().exec(context, scope);
    }
}
